import React from 'react';
import { StyleSheet, Text, View, Button,TextInput, Image } from 'react-native';



// Function based component
// const MyFunctionalComp = (props) => {
//   return (
//     <View>
//       <Text>{props.randomNumber}</Text>
//       <Text>{props.pi}</Text>
//     </View>
//   )
// }


export default class App extends React.Component {
  // constructor() {
  //   super()
  //   this.i = -1
  //   this.alphabetsList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']
  // }
  // state = {
  //   value: Math.random(),
  //   alphabet: ''
  // }

  // changeState(newState) {
  //   this.setState({
  //     value: newState
  //   })
  // }


  // changeAlphabet() {
  //   if (this.i < this.alphabetsList.length) {
  //     this.i++;
  //     this.setState({
  //       alphabet: this.alphabetsList[this.i]
  //     })
  //   } else {
  //     this.i = 0;
  //     this.setState({
  //       alphabet: this.alphabetsList[this.i]
  //     })
  //   }
  // }

  // state = {
  //   color: "hello",

  // }

  // buttonPressed(color) {
  //   // alert(color + " button is pressed")
  //   this.setState({
  //     color: color
  //   })
  // }

  render() {
    // const arr = ['a', 'b', 'c']
    // const toDisplay = arr.map(arrElements => {
    //   return <Text>{arrElements}</Text>
    // })

    return (
      <View style={styles.container}>
        {/* {toDisplay}
        <MyFunctionalComp randomNumber={Math.random()} />
        <MyFunctionalComp pi={Math.PI} />
        <MyFunctionalComp pi={Math.PI} />
        <Text>{this.state.value}</Text>
        <Text>{this.state.alphabet}</Text>
        <Button title="CLICK ME" onPress={() => this.changeState(parseInt(Math.random() * 10))} />
        <Button title="CLICK ME" onPress={() => this.changeAlphabet()} /> */}
        {/* <Text style={styles.text}>{this.state.color}</Text>
        <View style={styles.viewForButton}>
          <Button
            title="CLICK ME"
            color="green"
            onPress={() => this.buttonPressed("green")}
          />
          <Button
            title="CLICK ME"
            color="red"
            onPress={() => this.buttonPressed("red")}
          />
          <Button
            title="CLICK ME"
            color="orange"
            onPress={() => this.buttonPressed("orange")}
          />
        </View> */}
        <Text>ABC</Text>
        <Image 
          source={{
            uri: "assets\black-pen-near-iphone-and-apple-magic-keyboard-934062.jpg",
            height: 200,
            width: 200,
          }}
        />

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:"center",
    textAlign:"center",
  },
  // text: {
  //   color: "blue",
  //   fontSize: 30,
  //   marginBottom: 10
  // },
  // viewForButton:{
  //   width:"inherit",
  //   flexDirection: "row",
  //   justifyContent:"space-around",
  //   borderWidth:3
  // },
  image:{
    borderWidth: 3
  }
});
