import React from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { PDFDocument, PDFPage } from 'react-native-pdf-lib';
import RNFS from 'react-native-fs';

const App = () => {
  const generatePDF = async () => {
    try {
      const pdfPath = `${RNFS.DocumentDirectoryPath}/example.pdf`;

      const page = PDFPage.create()
        .setMediaBox(200, 200)
        .drawText('Hello, this is a customizable PDF!', {
          x: 5,
          y: 150,
          color: '#007aff',
          fontSize: 14,
        })
        .drawImage('https://example.com/image.png', 'png', {
          x: 50,
          y: 50,
          width: 100,
          height: 100,
        });

      const pdf = PDFDocument.create(pdfPath).addPages(page);

      await pdf.write(); // Save the PDF

      Alert.alert('Success', `PDF saved at: ${pdfPath}`);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={generatePDF}>
        <Text style={styles.text}>Generate PDF</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#007aff',
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
