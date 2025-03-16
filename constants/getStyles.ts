import {StyleSheet} from 'react-native';
import {lightTheme, darkTheme} from './Theme';
import {Colors} from './Colors';
import {LinearGradient} from 'expo-linear-gradient';

export const getStyles = (theme: string) => {
  const colors = theme === 'light' ? lightTheme : darkTheme;

  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      height: '100%',
      overflow: 'hidden',
      position: 'relative',
      width: '100%',
      paddingHorizontal: 24,
      display: 'flex',
      flexDirection: 'column',
    },
    background: {
      flex: 1,
    },
    header: {
      marginTop: 60,
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'inherit',
    },
    menu: {
      width: 40,
      height: 40,
      borderRadius: 20,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.secondary,
      borderColor: colors.border,
    },
    upgradeContainer: {
      height: 40,
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
      gap: 10,
      borderRadius: 20,
      backgroundColor: Colors.colors.DeepOrange,
    },
    upgradeText: {
      color: 'white',
      fontSize: 16,
    },
    title: {
      marginVertical: 16,
    },
    icons: {
      width: 32,
      height: 32,
      backgroundColor: '#FF5733',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 6,
    },
    settingsIcon: {
      backgroundColor: colors.text,
      height: 40,
      width: 40,
      borderRadius: 20,
      padding: 10,
    },
    settings: {
      borderRadius: 12,
      marginTop: 16,
      paddingHorizontal: 16,
      width: '100%',
      textAlign: 'left',
      display: 'flex',
      justifyContent: 'center',
      alignSelf: 'stretch',
      backdropFilter: 'blur(12)',
      borderWidth: 1,
      backgroundColor: colors.secondary,
      borderColor: colors.border,
    },

    settingItem: {
      flexDirection: 'row',
      gap: 16,
      alignItems: 'center',
      paddingHorizontal: 0,
      alignSelf: 'stretch',
      height: 64,
    },
    // settingCard: {
    //   flexDirection: 'row',
    //   justifyContent: 'space-between',
    //   alignSelf: 'stretch'
    // },
    settingCardTexts: {
      flexDirection: 'column',
    },
    itemText: {},
    textCountContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex: 1,
      height: '100%',
      paddingVertical: 16,
      alignItems: 'center',
    },
    borderBottom: {
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    textCountContainerNoBorder: {
      borderBottomWidth: 0,
    },
    count: {},
    timer: {
      fontSize: 64,
      marginTop: 85,
      marginBottom: 48,
      lineHeight: 76.8,
      fontWeight: 700,
    },
    playContainer: {
      height: 100,
      width: 100,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      backgroundColor: colors.text,
    },
  });
};
