import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, StatusBar } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import DietScreen from './src/screens/DietScreen';
import WorkoutScreen from './src/screens/WorkoutScreen';

const App = () => {
    const [activeTab, setActiveTab] = useState('Home');

    const renderScreen = () => {
        switch (activeTab) {
            case 'Home': return <HomeScreen />;
            case 'Diet': return <DietScreen />;
            case 'Workout': return <WorkoutScreen />;
            default: return <HomeScreen />;
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            <View style={styles.header}>
                <Text style={styles.headerTitle}>FitLife Tracker</Text>
            </View>

            <View style={styles.content}>
                {renderScreen()}
            </View>

            <View style={styles.tabBar}>
                <TouchableOpacity
                    style={styles.tabItem}
                    activeOpacity={0.7}
                    onPress={() => setActiveTab('Home')}
                >
                    <Text style={[styles.tabIcon, activeTab === 'Home' && styles.tabIconActive]}>🔥</Text>
                    <Text style={[styles.tabText, activeTab === 'Home' && styles.tabTextActive]}>Kalori</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.tabItem}
                    activeOpacity={0.7}
                    onPress={() => setActiveTab('Diet')}
                >
                    <Text style={[styles.tabIcon, activeTab === 'Diet' && styles.tabIconActive]}>🥗</Text>
                    <Text style={[styles.tabText, activeTab === 'Diet' && styles.tabTextActive]}>Diyet</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.tabItem}
                    activeOpacity={0.7}
                    onPress={() => setActiveTab('Workout')}
                >
                    <Text style={[styles.tabIcon, activeTab === 'Workout' && styles.tabIconActive]}>💪</Text>
                    <Text style={[styles.tabText, activeTab === 'Workout' && styles.tabTextActive]}>Spor</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9'
    },
    header: {
        paddingVertical: 15,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: '800',
        color: '#ff6b6b',
        letterSpacing: 1
    },
    content: {
        flex: 1,
        backgroundColor: '#f9f9f9'
    },
    tabBar: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingBottom: 25, // For iPhone bottom safe area roughly
        paddingTop: 10,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabIcon: {
        fontSize: 22,
        marginBottom: 4,
        opacity: 0.5,
    },
    tabIconActive: {
        opacity: 1,
    },
    tabText: {
        fontSize: 12,
        color: '#888',
        fontWeight: '500'
    },
    tabTextActive: {
        color: '#ff6b6b',
        fontWeight: 'bold'
    },
});

export default App;
