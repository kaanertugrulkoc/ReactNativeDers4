import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';

const HomeScreen = () => {
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [gender, setGender] = useState('male'); // 'male' | 'female'
    const [activity, setActivity] = useState(1.2); // Activity multiplier
    const [results, setResults] = useState(null);

    const calculateCalories = () => {
        if (!age || !weight || !height) {
            Alert.alert('Hata', 'Lütfen tüm alanları doldurun.');
            return;
        }

        const a = parseFloat(age);
        const w = parseFloat(weight);
        const h = parseFloat(height);

        // BMR (Mifflin-St Jeor Equation)
        let bmr = 0;
        if (gender === 'male') {
            bmr = 10 * w + 6.25 * h - 5 * a + 5;
        } else {
            bmr = 10 * w + 6.25 * h - 5 * a - 161;
        }

        const dailyCalories = bmr * activity;
        const weightLossCalories = dailyCalories - 500; // 500 kcal deficit
        const fastWeightLossCalories = dailyCalories - 1000;

        setResults({
            maintain: Math.round(dailyCalories),
            lose: Math.round(weightLossCalories),
            fastLose: Math.round(fastWeightLossCalories),
        });
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.mainTitle}>Günlük Kalori İhtiyacı</Text>

            <View style={styles.card}>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={[styles.genderBtn, gender === 'male' && styles.genderBtnActive]}
                        onPress={() => setGender('male')}>
                        <Text style={[styles.genderText, gender === 'male' && styles.genderTextActive]}>Erkek</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.genderBtn, gender === 'female' && styles.genderBtnActive]}
                        onPress={() => setGender('female')}>
                        <Text style={[styles.genderText, gender === 'female' && styles.genderTextActive]}>Kadın</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Yaş:</Text>
                    <TextInput style={styles.input} keyboardType="numeric" value={age} onChangeText={setAge} placeholder="Örn: 25" placeholderTextColor="#aaa" />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Boy (cm):</Text>
                    <TextInput style={styles.input} keyboardType="numeric" value={height} onChangeText={setHeight} placeholder="Örn: 175" placeholderTextColor="#aaa" />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Kilo (kg):</Text>
                    <TextInput style={styles.input} keyboardType="numeric" value={weight} onChangeText={setWeight} placeholder="Örn: 70" placeholderTextColor="#aaa" />
                </View>

                <Text style={styles.labelCentered}>Hareket Seviyesi:</Text>
                <View style={styles.activityRow}>
                    <TouchableOpacity style={[styles.activityBtn, activity === 1.2 && styles.activityBtnActive]} onPress={() => setActivity(1.2)}>
                        <Text style={activity === 1.2 ? styles.activityTextActive : styles.activityText}>Az</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.activityBtn, activity === 1.55 && styles.activityBtnActive]} onPress={() => setActivity(1.55)}>
                        <Text style={activity === 1.55 ? styles.activityTextActive : styles.activityText}>Orta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.activityBtn, activity === 1.9 && styles.activityBtnActive]} onPress={() => setActivity(1.9)}>
                        <Text style={activity === 1.9 ? styles.activityTextActive : styles.activityText}>Çok</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.calculateBtn} onPress={calculateCalories}>
                    <Text style={styles.calculateText}>Hesapla</Text>
                </TouchableOpacity>
            </View>

            {results && (
                <View style={styles.resultsCard}>
                    <Text style={styles.resultsTitle}>Sonuçlar</Text>
                    <View style={styles.resultRow}>
                        <Text style={styles.resultLabel}>Kilonu Koru:</Text>
                        <Text style={styles.resultValue}>{results.maintain} kcal</Text>
                    </View>
                    <View style={styles.resultRowFocus}>
                        <Text style={styles.resultLabelFocus}>Haftada 0.5kg Ver:</Text>
                        <Text style={styles.resultValueFocus}>{results.lose} kcal</Text>
                    </View>
                    <View style={styles.resultRow}>
                        <Text style={styles.resultLabel}>Haftada 1kg Ver:</Text>
                        <Text style={styles.resultValue}>{results.fastLose} kcal</Text>
                    </View>

                    <Text style={styles.disclaimerText}>
                        * Bu sonuçlar genel hesaplamalara dayanmaktadır. Düşük kalorili diyet uygulamadan önce doktorunuza veya diyetisyeninize danışınız.
                    </Text>
                </View>
            )}
            <View style={{ height: 50 }} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    mainTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 15, color: '#333' },
    card: { backgroundColor: '#fff', borderRadius: 15, padding: 20, elevation: 3, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, marginBottom: 20 },
    row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
    genderBtn: { flex: 1, padding: 10, alignItems: 'center', borderWidth: 1, borderColor: '#ddd', borderRadius: 8, marginHorizontal: 5 },
    genderBtnActive: { backgroundColor: '#ff6b6b', borderColor: '#ff6b6b' },
    genderText: { fontSize: 16, color: '#555' },
    genderTextActive: { color: '#fff', fontWeight: 'bold' },
    inputGroup: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
    label: { flex: 1, fontSize: 16, color: '#444', fontWeight: '500' },
    labelCentered: { fontSize: 16, color: '#444', fontWeight: '500', marginTop: 10, marginBottom: 5 },
    input: { flex: 2, borderWidth: 1, borderColor: '#e0e0e0', borderRadius: 8, padding: 10, fontSize: 16, backgroundColor: '#fafafa', color: '#000' },
    activityRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
    activityBtn: { flex: 1, padding: 10, alignItems: 'center', backgroundColor: '#f0f0f0', borderRadius: 8, marginHorizontal: 4 },
    activityBtnActive: { backgroundColor: '#4a90e2' },
    activityText: { color: '#555', fontSize: 15 },
    activityTextActive: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
    calculateBtn: { backgroundColor: '#333', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 15 },
    calculateText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
    resultsCard: { backgroundColor: '#fff', borderRadius: 15, padding: 20, elevation: 3, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5 },
    resultsTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 15, color: '#333', textAlign: 'center' },
    resultRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#eee' },
    resultRowFocus: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, backgroundColor: '#eefcf1', borderRadius: 8, paddingHorizontal: 10, marginVertical: 8 },
    resultLabel: { fontSize: 16, color: '#555' },
    resultValue: { fontSize: 16, fontWeight: 'bold', color: '#333' },
    resultLabelFocus: { fontSize: 16, color: '#2e7d32', fontWeight: 'bold' },
    resultValueFocus: { fontSize: 18, fontWeight: 'bold', color: '#2e7d32' },
    disclaimerText: { fontSize: 12, color: '#888', marginTop: 15, fontStyle: 'italic', textAlign: 'center', lineHeight: 18 }
});

export default HomeScreen;
