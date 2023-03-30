import React,{useState} from 'react'
import { Box } from '@mui/material'
import ExerciseDetail from './ExerciseDetail'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import HeroBanner from '../components/HeroBanner'

const Home = () => {
  // changes reflect in all application
  const [bodyPart,setBodyPart]=useState([]);
  const [exercises,setExercises]=useState([]);
  console.log("hello",bodyPart);
  return (
   
    <Box>
        <HeroBanner></HeroBanner>
        <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        ></SearchExercises>
        <Exercises
         exercises={exercises}
         setExercises={setExercises}
         bodyPart={bodyPart}
        
        ></Exercises>
    </Box>
   
    
  )
}

export default Home
