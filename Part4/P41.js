const getHighAchievers = (students,passingScore)=>{
      const toppers =   students.filter((student)=>{
            return student.score>80
        })
        const topperNames = toppers.map((topper)=>{
            return topper.name.toUpperCase()
        })
        console.log(topperNames)
}

students=[
    {id: 1, name: 'Alice', score: 85 },
    {id: 2, name: 'BOB', score: 82 },
    {id: 3, name: 'Cat', score: 79 },
    {id: 4, name: 'Dog', score: 80 }
]
 getHighAchievers(students,80)
