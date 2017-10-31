import {
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Constants } from 'expo'

const statusBarHeight = Constants.statusBarHeight;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const hpOrange1 = "#f6916b";
const hpOrange2 = "#f16248";
const hpBrown1 = "#771f00";
const hpBrown2 = "#811400";
const hpCream = "#f6f7eb";
const hpTwitter = "#00a99d";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: hpBrown2,
  },
  hackprinceton: {
    fontSize: 16,
    color: hpOrange2,
    fontFamily: 'Abel',
  },
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: hpCream,
  },
  cardTitle: {
    fontSize: 32,
    color: hpOrange1,
    fontFamily: 'Abel',
  },
  dayofEvent: {
    margin: 10,
  },
  announcement: {
    margin: 10,
  },
  title: {
    fontSize: 20,
    color: hpBrown1,
    fontFamily: 'Abel',
  },
  body: {
    color: '#000000',
    fontFamily: 'Abel',
  },
  columns: {
    marginBottom: 10,
    textAlign: 'center',
  },
  medium3: {
    marginBottom: 10,
    fontSize: 10,
  },
  separator: {
    height: 1,
    backgroundColor: hpBrown1,
  },
  navbar: {
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: hpBrown1,
    padding: 5,
  },
  drawerOptions: {
    backgroundColor: hpBrown1,
    padding: 10,
    flex: 1,
  },
  drawerItem: {
    backgroundColor: hpCream, 
    padding: 10,
    borderWidth: 1,
    borderColor: hpBrown2,
  },
  drawerItemText: {
    fontFamily: 'Abel',
    fontSize: 16,
    color: hpBrown1,
  },
  webview: {
    width: deviceWidth,
    height: deviceHeight,
  },
});