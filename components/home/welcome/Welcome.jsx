import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { useRouter } from 'expo-router';
import styles from './welcome.style';
import { icons, SIZES, Sizes } from '../../../constants';

const jobTypes = ['Full-time', 'Part-time', 'Contract'];
const Welcome = ({searchTerm,setSearchTerm,handleClick}) => {
  const router = useRouter();

  const [activeJobType, setActiveJobType] = React.useState(jobTypes[0]);
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.userName}>Hossam</Text>
          <Text style={styles.welcomeMessage}>Find Your Perfect Job</Text>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value={searchTerm}
              onChangeText={(text) => {setSearchTerm(text)}}
              placeholder='Search for jobs'
            />
          </View>
          <TouchableOpacity style={styles.searchBtn} onPress={() => {
            handleClick();
          }}>
            <Image
              source={icons.search}
              resizeMode='contain'
              style={styles.searchBtnImage}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          keyExtractor={(item) => item}
          horizontal
          contentContainerStyle={{columnGap:SIZES.small}}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Welcome;
