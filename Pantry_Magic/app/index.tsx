import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import axios from 'axios';
import React, { useEffect } from 'react';

export default function App() {
  return (
    //mecanismo de busca Google Custom Search API
    useEffect(() => {
      const searchImage = async (query : string) => {
        const apiKey = 'AIzaSyCDG2bmFpKFjZHmSB3sau1jZQH22yWUyqQ'; 
        const cx = '909975a92b0d24e86'; 
        const endpoint = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(
          query
        )}&cx=${cx}&searchType=image&key=${apiKey}`;
  
        try {
          const response = await axios.get(endpoint);
          const images = response.data.items;
          console.log(images);
        } catch (error) {
          console.error('Erro ao buscar imagens:', error);
        }
      };
  
      searchImage('macarrão');
    }, []),

    <ScrollView contentContainerStyle={styles.scrollContainer} nestedScrollEnabled={true}>
      <View style={styles.container}>
        <View style={styles.centerContainer}>
          <Text style={styles.foodDayText}>Food Day</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.buttonContainer} nestedScrollEnabled={true}>
            <Text style={styles.button}>All Recipes</Text>
            <Text style={styles.button}>Breakfast</Text>
            <Text style={styles.button}>Lunch</Text>
            <Text style={styles.button}>Snack</Text>
            <Text style={styles.button}>Dinner</Text>
            <Text style={styles.button}>Desserts</Text>
            {/* <Text style={[styles.button, styles.lastButton]}>Desserts</Text> */}
          </ScrollView>
          <View style={styles.recipeContainer}>
            <View style={styles.recipeImageContainer}>
              <Image
                source={{ uri: 'https://img.freepik.com/fotos-gratis/pizza-de-vista-frontal-com-queijo_140725-26390.jpg' }}
                style={styles.recipeImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.recipeImageContainer}>
              <Image
                source={{ uri: 'https://img.freepik.com/fotos-gratis/pizza-de-vista-frontal-com-queijo_140725-26390.jpg' }}
                style={styles.recipeImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.recipeImageContainer}>
              <Image
                source={{ uri: 'https://img.freepik.com/fotos-gratis/pizza-de-vista-frontal-com-queijo_140725-26390.jpg' }}
                style={styles.recipeImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.recipeImageContainer}>
              <Image
                source={{ uri: 'https://img.freepik.com/fotos-gratis/pizza-de-vista-frontal-com-queijo_140725-26390.jpg' }}
                style={styles.recipeImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.recipeImageContainer}>
              <Image
                source={{ uri: 'https://img.freepik.com/fotos-gratis/pizza-de-vista-frontal-com-queijo_140725-26390.jpg' }}
                style={styles.recipeImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.recipeImageContainer}>
              <Image
                source={{ uri: 'https://img.freepik.com/fotos-gratis/pizza-de-vista-frontal-com-queijo_140725-26390.jpg' }}
                style={styles.recipeImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.recipeImageContainer}>
              <Image
                source={{ uri: 'https://img.freepik.com/fotos-gratis/pizza-de-vista-frontal-com-queijo_140725-26390.jpg' }}
                style={styles.recipeImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.recipeImageContainer}>
              <Image
                source={{ uri: 'https://img.freepik.com/fotos-gratis/pizza-de-vista-frontal-com-queijo_140725-26390.jpg' }}
                style={styles.recipeImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.recipeImageContainer}>
              <Image
                source={{ uri: 'https://img.freepik.com/fotos-gratis/pizza-de-vista-frontal-com-queijo_140725-26390.jpg' }}
                style={styles.recipeImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.recipeImageContainer}>
              <Image
                source={{ uri: 'https://img.freepik.com/fotos-gratis/pizza-de-vista-frontal-com-queijo_140725-26390.jpg' }}
                style={styles.recipeImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.recipeImageContainer}>
              <Image
                source={{ uri: 'https://img.freepik.com/fotos-gratis/pizza-de-vista-frontal-com-queijo_140725-26390.jpg' }}
                style={styles.recipeImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.recipeImageContainer}>
              <Image
                source={{ uri: 'https://img.freepik.com/fotos-gratis/pizza-de-vista-frontal-com-queijo_140725-26390.jpg' }}
                style={styles.recipeImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.recipeImageContainer}>
              <Image
                source={{ uri: 'https://img.freepik.com/fotos-gratis/pizza-de-vista-frontal-com-queijo_140725-26390.jpg' }}
                style={styles.recipeImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.recipeImageContainer}>
              <Image
                source={{ uri: 'https://img.freepik.com/fotos-gratis/pizza-de-vista-frontal-com-queijo_140725-26390.jpg' }}
                style={styles.recipeImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.recipeImageContainer}>
              <Image
                source={{ uri: 'https://img.freepik.com/fotos-gratis/pizza-de-vista-frontal-com-queijo_140725-26390.jpg' }}
                style={styles.recipeImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.recipeImageContainer}>
              <Image
                source={{ uri: 'https://img.freepik.com/fotos-gratis/pizza-de-vista-frontal-com-queijo_140725-26390.jpg' }}
                style={styles.recipeImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.recipeImageContainer}>
              <Image
                source={{ uri: 'https://img.freepik.com/fotos-gratis/pizza-de-vista-frontal-com-queijo_140725-26390.jpg' }}
                style={styles.recipeImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.recipeImageContainer}>
              <Image
                source={{ uri: 'https://img.freepik.com/fotos-gratis/pizza-de-vista-frontal-com-queijo_140725-26390.jpg' }}
                style={styles.recipeImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.recipeImageContainer}>
              <Image
                source={{ uri: 'https://img.freepik.com/fotos-gratis/pizza-de-vista-frontal-com-queijo_140725-26390.jpg' }}
                style={styles.recipeImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.recipeImageContainer}>
              <Image
                source={{ uri: 'https://img.freepik.com/fotos-gratis/pizza-de-vista-frontal-com-queijo_140725-26390.jpg' }}
                style={styles.recipeImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.recipeImageContainer}>
              <Image
                source={{ uri: 'https://img.freepik.com/fotos-gratis/pizza-de-vista-frontal-com-queijo_140725-26390.jpg' }}
                style={styles.recipeImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.recipeImageContainer}>
              <Image
                source={{ uri: 'https://img.freepik.com/fotos-gratis/pizza-de-vista-frontal-com-queijo_140725-26390.jpg' }}
                style={styles.recipeImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.recipeImageContainer}>
              <Image
                source={{ uri: 'https://img.freepik.com/fotos-gratis/pizza-de-vista-frontal-com-queijo_140725-26390.jpg' }}
                style={styles.recipeImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.recipeImageContainer}>
              <Image
                source={{ uri: 'https://img.freepik.com/fotos-gratis/pizza-de-vista-frontal-com-queijo_140725-26390.jpg' }}
                style={styles.recipeImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.recipeImageContainer}>
              <Image
                source={{ uri: 'https://img.freepik.com/fotos-gratis/pizza-de-vista-frontal-com-queijo_140725-26390.jpg' }}
                style={styles.recipeImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.recipeImageContainer}>
              <Image
                source={{ uri: 'https://img.freepik.com/fotos-gratis/pizza-de-vista-frontal-com-queijo_140725-26390.jpg' }}
                style={styles.recipeImage}
                resizeMode="cover"
              />
            </View>

          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
  },
  centerContainer: {
    width: '100%',
  },
  buttonContainer: {
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    maxHeight: 40,
  },
  button: {
    backgroundColor: '#FFFFFF',
    padding: 5,
    marginRight: 10,
    borderRadius: 5,
    textAlign: 'center',
    color: '#000000',
    fontSize: 11,
    fontWeight: 'bold',
    minWidth: 20,
    minHeight: 20,
    borderWidth: 1,
    borderColor: '#000000',
  },
  lastButton: {
    marginRight: 20,
  },
  foodDayText: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 0,
    fontSize: 32,
  },
  recipeContainer: {
    marginTop: 20,
    marginLeft: 20,
    width: '90%',
  },
  recipeImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  recipeImageContainer: {
    width: '100%',
    height: 125,
    overflow: 'hidden',
    borderRadius: 10,
    marginBottom: 15,
    maxWidth: 400,
  },
});




