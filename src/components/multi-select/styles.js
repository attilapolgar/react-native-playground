import { StyleSheet } from 'react-native'
import { colors } from '../../../styles'

export default StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  placeholderText: {
    color: colors.veryLightGray,
    fontSize: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    paddingHorizontal: 10,
    borderBottomColor: colors.veryLightGray,
    borderBottomWidth: 1,
  },

  headerText: {
    color: colors.gray,
    fontSize: 17,
  },
  modalHeaderText: {
    color: colors.brandPrimary,
  },

  input: {
    justifyContent: 'center',
    paddingRight: 10,
    flex: 1,
  },

  optionsContainer: {
    width: '100%',
    zIndex: 200,
  },
  groupContainer: {
    paddingVertical: 20,
    borderBottomColor: colors.lightGveryLightGrayrey,
    borderBottomWidth: 1,
  },
  groupName: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 10,
    color: colors.veryDarkGray,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    flex: 1,
  },
  optionText: {
    fontSize: 17,
    color: colors.veryDarkGray,
  },
  selectedOptionRow: {
    backgroundColor: colors.veryLightGray,
  },
  selectedOptionText: {
    color: colors.brandPrimary,
  },
  selectedIcon: {
    marginLeft: 10,
  },
  modalContentWrapper: {
    padding: 20,
    flex: 1,
    backgroundColor: colors.transparentBlack,
  },
  modalContent: {
    flex: 1,
    backgroundColor: colors.white,
  },
  modalHeader: {
    padding: 10,
  },
  iconContainer: { alignSelf: 'flex-end' },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 50,
    paddingHorizontal: 10,
    borderTopColor: colors.veryLightGray,
    borderTopWidth: 1,
  },

  footerButton: {
    padding: 15,
  },
})
