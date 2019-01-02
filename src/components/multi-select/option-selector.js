import React from 'react'
import { func, array, string } from 'prop-types'

import { Text, View, FlatList } from 'react-native'
import Option from './option'
import styles from './styles'

OptionSelector.propTypes = {
  handleOptionSelect: func.isRequired,
  optionGroups: array.isRequired,
  value: array.isRequired,
  id: string.isRequired,
}

function OptionSelector({ optionGroups, value, handleOptionSelect, id }) {
  return (
    <FlatList
      listKey={`${id}-categories`}
      style={styles.optionsContainer}
      data={optionGroups}
      extraData={value}
      keyExtractor={i => i.name}
      renderItem={({ item }) => {
        const { options, name } = item

        return (
          <View style={styles.groupContainer}>
            {name && <Text style={styles.groupName}>{name.toUpperCase()}</Text>}

            {options.map(({ label }) => {
              const props = {
                label,
                isSelected: value.includes(label),
                onPress: handleOptionSelect,
              }

              return <Option {...props} key={label} />
            })}
          </View>
        )
      }}
    />
  )
}

export default OptionSelector
