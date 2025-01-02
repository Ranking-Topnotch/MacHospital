import React from 'react';
import { StyleSheet, Image, View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = () => {
  return (
    <View style={styles.wrap}>
            
            <Image
                source={require('./assest/Screenshot 2023-03-20 051458 2.png')} // Path to your image
                style={{ marginTop: 50, marginBottom: 20}}
            />
        <View style={styles.container}>

            <TouchableOpacity style={styles.googleButton}>
                <Image
                source={require('./assest/7123025_logo_google_g_icon.png')} // Path to your image
                style={styles.logo}
                />
                <Text style={styles.socialButtonText}> Sign up with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.facebookButton}>
                <Icon style={{marginRight: 4}} name="facebook" size={20} color="#fff" />
                <Text style={styles.socialButtonText}> Sign up with Facebook</Text>
            </TouchableOpacity>

            <View style={styles.section}>
                <View style={{ width: '45%', height: 1, backgroundColor: '#000'}}></View>
                <Text style={styles.orText}>OR</Text>
                <View style={{ width: '45%', height: 1, backgroundColor: '#000'}}></View>
            </View>

            
            <View style={styles.inputCon}>
                <Text style={styles.inputLabel}>Name</Text>
                <TextInput style={styles.input} placeholder="First and Last name" />
            </View>
            <View style={styles.inputCon}>
                <Text style={styles.inputLabel}>Nationality</Text>
                <TextInput style={styles.input} />
            </View><View style={styles.inputCon}>
                <Text style={styles.inputLabel}>State of origin</Text>
                <TextInput style={styles.input} />
            </View><View style={styles.inputCon}>
                <Text style={styles.inputLabel}>Mobile</Text>
                <TextInput style={styles.input} keyboardType="phone-pad" />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.nextButton}>
                <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.backButton}>
                <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 15,
  },
  googleButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    width: '100%',
    paddingVertical: 12,
    marginBottom: 10,
    alignItems: 'center',
  },
   logo: {
    width: 30,
    height: 30,
    marginRight: 4,
  },
  facebookButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#1877f2',
    borderRadius: 25,
    width: '100%',
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  socialButtonText: {
    color: '#000000',
    fontWeight: 'bold',
  },
  section: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  orText: {
    marginVertical: 10,
    color: '#777',
    marginRight: 2,
    marginLeft: 2,
  },
  inputCon: {
    position: 'relative',
    width: '100%',
    marginBottom: 15,
  },
  inputLabel: {
    position: 'absolute',
    backgroundColor: '#fff',
    zIndex: 99,
    left: 10,
    top:  -10,
    paddingHorizontal: 10,
    color: '#ccc',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 60,
  },
  nextButton: {
    backgroundColor: '#00cc99',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 25,
    alignItems: 'center',
    width: '48%',
  },
  backButton: {
    backgroundColor: '#ccc',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 25,
    alignItems: 'center',
    width: '48%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
