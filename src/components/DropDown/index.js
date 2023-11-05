import { React, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Colors from '../Colors';

const data = [
    { label: 'Guest', value: '1' },
    { label: 'Admin', value: '2' },
    { label: 'SuperAdmin', value: '3' },
  ];

const DropDown = (props) => {
    
    const [value, setValue] = useState(null);
    const renderItem = item => {
      return (
        <View style={styles.item}>
          <Text style={styles.textItem}>{item.label}</Text>
        </View>
      );
    };

    return (
      <View style={styles.container}>
        <Text style={[styles.text, {marginRight: props.marginRight}]}>{props.dropDownText}</Text>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select user roles..."
          searchPlaceholder="Search..."
          value={value}
          onChange={item => {
            setValue(item.value);
          }}
          renderItem={renderItem}
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    text:{
        fontWeight: 'bold',
        fontSize: 15,
    },
    dropdown: {
      alignItems: 'center',
      margin: 16,
      height: 50,
      backgroundColor: Colors.appColor2,
      padding: 12,
      borderColor: Colors.appColor4,
      borderWidth: 1,
      width: 250,
    },
    icon: {
      marginRight: 5,
    },
    item: {
      padding: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textItem: {
      flex: 1,
      fontSize: 16,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });
  
export default DropDown;