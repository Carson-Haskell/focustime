import { View, Text, FlatList } from 'react-native';

import { styles } from './styles';

export const FocusHistory = ({ history }) => {
  const renderItem = ({ item }) => <Text style={styles.item}>· {item}</Text>;

  return (
    <View style={styles.container}>
      {!history.length ? (
        <Text style={styles.title}>We haven't focused on anything yet</Text>
      ) : (
      <>
        <Text style={styles.title}>Things we've focused on:</Text>
        <FlatList data={history} renderItem={renderItem} />
      </>
      )}
    </View>
  );
};
