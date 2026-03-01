import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Başlangıç Uygulaması</Text>
                <Text style={styles.subtitle}>React Native ile JavaScript kullanarak oluşturuldu.</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        color: '#666',
    },
});

export default App;
