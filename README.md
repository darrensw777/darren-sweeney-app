# Darren Sweeney react-native app

## Project setup

## STEP 1: Create a github repo for your new project:

### Navigate to the folder you just created then install checkout the new repo you created

```
git clone https://github.com/darrensw777/darren-sweeney-app.git .
```

### Now create the expo app in the same folder:

```
npx create-expo-app
```

## Step 2: Let's add some libraries we know we're going to need:

```
npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs react-native-gesture-handler react-native-reanimated
npm install --save-dev @types/react-native @types/react-navigation @types/react-navigation/stack @types/react-navigation/bottom-tabs
npm install -D @tsconfig/react-native @types/jest @types/react @types/react-test-renderer typescript
```

### Create ts config file:

```
In the root of the app, create file tsconfig.json
Add this content:
{
  "extends": "@tsconfig/react-native/tsconfig.json"
}
```

## Step 3: A little bit of a set up:

```
Add images and fonts folders to the assets directory.
Create a new directory at root named src
Create directories in new src folder: screens, components, navigation, utils
```
