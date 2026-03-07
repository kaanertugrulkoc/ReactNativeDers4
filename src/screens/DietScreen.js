import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const DietScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Örnek Diyet Programı</Text>
            <Text style={styles.subtitle}>Günlük ~1500 kcal için örnek menü</Text>

            <View style={styles.mealCard}>
                <View style={styles.mealHeader}>
                    <Text style={styles.mealTitle}>🌅 Sabah Kahvaltısı</Text>
                    <Text style={styles.mealCalories}>~350 kcal</Text>
                </View>
                <Text style={styles.mealItem}>• 2 adet haşlanmış yumurta</Text>
                <Text style={styles.mealItem}>• 1 dilim tam buğday ekmeği</Text>
                <Text style={styles.mealItem}>• 30g az yağlı beyaz peynir</Text>
                <Text style={styles.mealItem}>• Söğüş domates, salatalık (Bol yeşillik)</Text>
                <Text style={styles.mealItem}>• Şekersiz yeşil çay veya kahve</Text>
            </View>

            <View style={styles.mealCard}>
                <View style={styles.mealHeader}>
                    <Text style={styles.mealTitle}>☀️ Öğle Yemeği</Text>
                    <Text style={styles.mealCalories}>~450 kcal</Text>
                </View>
                <Text style={styles.mealItem}>• 150g ızgara tavuk göğsü</Text>
                <Text style={styles.mealItem}>• 4 yemek kaşığı bulgur pilavı veya haşlanmış kinoa</Text>
                <Text style={styles.mealItem}>• Bol yeşillikli zeytinyağlı salata (1 tatlı kaşığı yağ)</Text>
            </View>

            <View style={styles.mealCard}>
                <View style={styles.mealHeader}>
                    <Text style={styles.mealTitle}>🍎 Ara Öğün</Text>
                    <Text style={styles.mealCalories}>~200 kcal</Text>
                </View>
                <Text style={styles.mealItem}>• 1 porsiyon taze meyve (Elma veya 10 çilek)</Text>
                <Text style={styles.mealItem}>• 10 adet çiğ badem veya ceviz</Text>
                <Text style={styles.mealItem}>• 1 fincan şekersiz Türk kahvesi</Text>
            </View>

            <View style={styles.mealCard}>
                <View style={styles.mealHeader}>
                    <Text style={styles.mealTitle}>🌙 Akşam Yemeği</Text>
                    <Text style={styles.mealCalories}>~400 kcal</Text>
                </View>
                <Text style={styles.mealItem}>• 1 kase sebze çorbası (Unsuz)</Text>
                <Text style={styles.mealItem}>• 6-7 kaşık zeytinyağlı sebze yemeği (Kabak, taze fasulye vs.)</Text>
                <Text style={styles.mealItem}>• 1 kase (150g) yarım yağlı yoğurt</Text>
            </View>

            <View style={styles.infoCard}>
                <Text style={styles.infoText}>💧 Günde en az 2.5 - 3 litre su içmeyi unutmayın!</Text>
                <Text style={styles.infoText}>🚫 Şekerli içeceklerden, hamur işlerinden ve paketli gıdalardan uzak durun.</Text>
                <Text style={styles.infoText}>⏰ Yemeklerinizi en geç akşam 19:00 - 20:00 civarında bitirmeye çalışın.</Text>
            </View>

            <View style={{ height: 50 }} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 5 },
    subtitle: { fontSize: 16, color: '#777', marginBottom: 20 },
    mealCard: { backgroundColor: '#fff', borderRadius: 12, padding: 15, marginBottom: 15, elevation: 2, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 3 },
    mealHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, borderBottomWidth: 1, borderBottomColor: '#f0f0f0', paddingBottom: 8 },
    mealTitle: { fontSize: 18, fontWeight: 'bold', color: '#ff6b6b' },
    mealCalories: { fontSize: 14, color: '#888', fontWeight: 'bold' },
    mealItem: { fontSize: 15, color: '#444', marginBottom: 5, lineHeight: 22 },
    infoCard: { backgroundColor: '#eefcf1', padding: 15, borderRadius: 12, marginTop: 10, borderWidth: 1, borderColor: '#c8e6c9' },
    infoText: { fontSize: 15, color: '#2e7d32', marginBottom: 8, fontWeight: '500', lineHeight: 22 },
});

export default DietScreen;
