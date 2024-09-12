import { StyleSheet, View, Pressable, Text} from 'react-native';

export default function Button({ label, theme } : { label: string, theme: string}) {

    if (theme === "primary") {
        return (
            <View style={[styles.buttonContainer, { borderWidth: 0, borderRadius: 18 }]}>
                <Pressable style={[styles.button, { backgroundColor: "#fff" }]}>
                    <Text style={[styles.buttonLabel, { color: '#253238' }]}>{label}</Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View style={[styles.buttonContainer, { borderWidth: 0, borderRadius: 18 }]}>
            <Pressable style={[styles.button, { backgroundColor: "#1DCA69" }]}>
                <Text style={[styles.buttonLabel, { color: '#fff' }]}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 350,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        fontSize: 16,
        fontWeight: '500',
    },
});