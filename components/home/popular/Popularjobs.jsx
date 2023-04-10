import React,{useState} from 'react'
import { View, Text,TouchableOpacity,FlatList,ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import {COLORS,SIZES,icons} from '../../../constants'
import  PopularJobCard  from '../../common/cards/popular/PopularJobCard'

import useFetch from '../../../hooks/useFetch';
const Popularjobs = () => {
  const router = useRouter();
  const {data,isLoading,error,refetch}=useFetch('search',{
    query:'React developer',
    num_pages:1
  })

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}> 
      <Text style={styles.headerTitle}>Popular Jobs</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show All</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text style={styles.error}>Error</Text>
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item.item?.job_id}
            horizontal
            contentContainerStyle={{columnGap:SIZES.small}}
           renderItem={({item})=>(
              <PopularJobCard
              item={item}
              selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
             
           )}
          />
        )}
      </View>
      
    </View>
  )
}

export default Popularjobs