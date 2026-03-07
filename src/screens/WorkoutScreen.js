import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const WorkoutScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Zayıflama Antrenmanları</Text>
            <Text style={styles.subtitle}>Evde veya spor salonunda uygulayabilirsiniz.</Text>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>🏃‍♂️ Kardiyo (Haftada 3-4 Gün)</Text>
                <Text style={styles.description}>
                    Yağ yakımını hızlandırmak için kalp atış hızınızı artırmanız önemlidir. Ağırlık antrenmanından sonra veya ayrı bir günde uygulayabilirsiniz.
                </Text>
                <View style={styles.listItem}>
                    <Text style={styles.dot}>•</Text>
                    <Text style={styles.listText}><Text style={styles.bold}>Tempolu Yürüyüş:</Text> 30-45 dk (Hafif terleyecek tempoda)</Text>
                </View>
                <View style={styles.listItem}>
                    <Text style={styles.dot}>•</Text>
                    <Text style={styles.listText}><Text style={styles.bold}>Bisiklet veya Eliptik:</Text> 20-30 dk orta direnç</Text>
                </View>
                <View style={styles.listItem}>
                    <Text style={styles.dot}>•</Text>
                    <Text style={styles.listText}><Text style={styles.bold}>İp Atlama:</Text> 3 set 100 tekrar (Diz probleminiz yoksa)</Text>
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>🏋️‍♀️ Güç / Direnç Antrenmanı</Text>
                <Text style={styles.description}>
                    Kas kütlenizi korumak/artırmak, metabolizmanızı gün boyu hızlı tutar. (Haftada 2-3 Gün)
                </Text>
                <View style={styles.listItem}>
                    <Text style={styles.dot}>•</Text>
                    <Text style={styles.listText}><Text style={styles.bold}>Squat (Çömelme):</Text> 3 set 15 tekrar</Text>
                </View>
                <View style={styles.listItem}>
                    <Text style={styles.dot}>•</Text>
                    <Text style={styles.listText}><Text style={styles.bold}>Lunge (Adım Alma):</Text> 3 set 12 tekrar (Her bacak)</Text>
                </View>
                <View style={styles.listItem}>
                    <Text style={styles.dot}>•</Text>
                    <Text style={styles.listText}><Text style={styles.bold}>Push-up (Şınav):</Text> 3 set (Yapabildiğiniz kadar, dize dayalı olabilir)</Text>
                </View>
                <View style={styles.listItem}>
                    <Text style={styles.dot}>•</Text>
                    <Text style={styles.listText}><Text style={styles.bold}>Plank:</Text> 3 set 30-45 saniye</Text>
                </View>
                <View style={styles.listItem}>
                    <Text style={styles.dot}>•</Text>
                    <Text style={styles.listText}><Text style={styles.bold}>Glute Bridge (Kalça Kaldırma):</Text> 3 set 20 tekrar</Text>
                </View>
            </View>

            <View style={styles.tipCard}>
                <Text style={styles.tipTitle}>💡 Önemli İpucu</Text>
                <Text style={styles.tipText}>Isınmadan spora başlamayın. Spora başlamadan önce 5 dakika hafif tempolu ısınma hareketleri (olduğunuz yerde koşu, eklem çevirme) yapın. Antrenman bitiminde ise esneme (stretching) yapmayı unutmayın.</Text>
            </View>

            <View style={{ height: 50 }} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 5 },
    subtitle: { fontSize: 16, color: '#777', marginBottom: 20 },
    card: { backgroundColor: '#fff', borderRadius: 12, padding: 15, marginBottom: 20, elevation: 2, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 3 },
    cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#4a90e2', marginBottom: 10, borderBottomWidth: 1, borderBottomColor: '#f0f0f0', paddingBottom: 8 },
    description: { fontSize: 14, color: '#666', marginBottom: 15, fontStyle: 'italic', lineHeight: 20 },
    listItem: { flexDirection: 'row', marginBottom: 10, alignItems: 'flex-start' },
    dot: { fontSize: 18, color: '#4a90e2', marginRight: 8, lineHeight: 22 },
    listText: { flex: 1, fontSize: 15, color: '#444', lineHeight: 22 },
    bold: { fontWeight: 'bold', color: '#333' },
    tipCard: { backgroundColor: '#fff3cd', padding: 15, borderRadius: 12, borderWidth: 1, borderColor: '#ffeeba' },
    tipTitle: { fontSize: 16, fontWeight: 'bold', color: '#856404', marginBottom: 8 },
    tipText: { fontSize: 14, color: '#856404', lineHeight: 20 },
});

export default WorkoutScreen;
