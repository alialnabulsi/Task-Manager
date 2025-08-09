// app/edit-task.jsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  SafeAreaView,
  Platform, // Used for Platform-specific date picker
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';



const EditTaskScreen = () => {
  const router = useRouter();

  // State for Task table fields
  const [taskID, setTaskID] = useState('12345'); // Assuming taskID is passed as a prop or fetched
  const [title, setTitle] = useState('Review project proposal');
  const [status, setStatus] = useState('Pending'); // Could be a Picker/Dropdown
  const [priority, setPriority] = useState('High'); // Could be a Picker/Dropdown
  const [deadline, setDeadline] = useState('2025-08-10'); // Would use Date object with DatePicker
  const [issueDate, setIssueDate] = useState('2025-08-01'); // Would use Date object with DatePicker
  const [type, setType] = useState('Work');
  const [location, setLocation] = useState('Office');
  const [iconID, setIconID] = useState('1'); // Would be a selectable icon

  // State for TaskContent table fields
  const [taskContentText, setTaskContentText] = useState(
    'Detailed review of the project proposal document, focusing on budget and timeline feasibility. Provide feedback by end of day.'
  );
  const [imageUri, setImageUri] = useState(''); // For image file path/URI
  const [videoUri, setVideoUri] = useState(''); // For video file path/URI
  const [audioUri, setAudioUri] = useState(''); // For audio file path/URI


  const handleSaveChanges = () => {
    console.log('Saving Changes:', {
      taskID,
      title,
      status,
      priority,
      deadline,
      issueDate,
      type,
      location,
      iconID,
      taskContentText,
      imageUri,
      videoUri,
      audioUri,
    });
    // After saving, navigate back or show a success message
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header */}
      <View style={styles.customHeader}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
         <Ionicons 
  name="arrow-back-outline" 
  size={24} 
  color="#000"
  onPress={() => router.back()} 
/>

        </TouchableOpacity>
        <Text style={styles.customHeaderTitle}>Edit Task</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Task Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Task Details</Text>

          <Text style={styles.label}>Task ID</Text>
          <TextInput style={styles.input} value={taskID} editable={false} />

          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            placeholder="e.g., Review project proposal"
          />

          <Text style={styles.label}>Status</Text>
          {/* In a real app, this would be a Picker or custom component */}
          <TextInput
            style={styles.input}
            value={status}
            onChangeText={setStatus}
            placeholder="e.g., Pending, Completed"
          />

          <Text style={styles.label}>Priority</Text>
          {/* In a real app, this would be a Picker or custom component */}
          <TextInput
            style={styles.input}
            value={priority}
            onChangeText={setPriority}
            placeholder="e.g., High, Medium, Low"
          />

          <Text style={styles.label}>Deadline</Text>
          <TouchableOpacity 
            style={styles.inputContainer} 
            // onPress={() => showDatePicker('deadline')}
          >
            <TextInput
              style={[styles.input, styles.dateInput]}
              value={deadline}
              placeholder="YYYY-MM-DD"
              editable={false} // Make it uneditable as it will be set by picker
            />
            <Ionicons name="calendar-outline" size={20} color="#888" style={styles.dateIcon} />
          </TouchableOpacity>
          

          <Text style={styles.label}>Issue Date</Text>
          <TouchableOpacity 
            style={styles.inputContainer} 
            // onPress={() => showDatePicker('issueDate')}
          >
            <TextInput
              style={[styles.input, styles.dateInput]}
              value={issueDate}
              placeholder="YYYY-MM-DD"
              editable={false} // Make it uneditable as it will be set by picker
            />
            <Ionicons name="calendar-outline" size={20} color="#888" style={styles.dateIcon} />
          </TouchableOpacity>

          <Text style={styles.label}>Type</Text>
          <TextInput
            style={styles.input}
            value={type}
            onChangeText={setType}
            placeholder="e.g., Work, Personal"
          />

          <Text style={styles.label}>Location</Text>
          <TextInput
            style={styles.input}
            value={location}
            onChangeText={setLocation}
            placeholder="e.g., Office, Home"
          />

          <Text style={styles.label}>Icon ID</Text>
          {/* In a real app, this would be an icon picker */}
          <TextInput
            style={styles.input}
            value={iconID}
            onChangeText={setIconID}
            placeholder="e.g., 1, 2"
          />
        </View>

        {/* Task Content Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Task Content</Text>

          <Text style={styles.label}>Text Content</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={taskContentText}
            onChangeText={setTaskContentText}
            multiline
            numberOfLines={4}
            placeholder="Add detailed description here..."
          />

          <Text style={styles.label}>Media Attachments</Text>
          <TouchableOpacity style={styles.mediaButton}>
            <Ionicons name="image-outline" size={24} color="#555" />
            <Text style={styles.mediaButtonText}>Add Image</Text>
          </TouchableOpacity>
          {imageUri ? <Text style={styles.mediaUriText}>{imageUri}</Text> : null}

          <TouchableOpacity style={styles.mediaButton}>
            <Ionicons name="videocam-outline" size={24} color="#555" />
            <Text style={styles.mediaButtonText}>Add Video</Text>
          </TouchableOpacity>
          {videoUri ? <Text style={styles.mediaUriText}>{videoUri}</Text> : null}

          <TouchableOpacity style={styles.mediaButton}>
            <Ionicons name="mic-outline" size={24} color="#555" />
            <Text style={styles.mediaButtonText}>Add Audio</Text>
          </TouchableOpacity>
          {audioUri ? <Text style={styles.mediaUriText}>{audioUri}</Text> : null}
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* DatePicker Modal (if uncommented) */}
      {/*
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  customHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    position: 'relative',
    marginTop: Platform.OS === 'android' ? 15 : 0, // Adjust for Android status bar
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  customHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 30, // Add some bottom padding for the scroll view content
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  dateInput: {
    // Styles specific for date inputs if needed
  },
  dateIcon: {
    paddingHorizontal: 15,
  },
  textArea: {
    height: 100, // Increased height for multiline text
    textAlignVertical: 'top', // Aligns text to the top for multiline
    paddingVertical: 10,
  },
  mediaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  mediaButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#555',
  },
  mediaUriText: {
    fontSize: 12,
    color: '#888',
    marginBottom: 10,
    marginLeft: 5,
  },
  saveButton: {
    backgroundColor: '#4CAF50', // Green button
    padding: 18,
    borderRadius: 15,
    alignItems: 'center',
    marginHorizontal: 20, // To align with screen padding
    marginTop: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EditTaskScreen;