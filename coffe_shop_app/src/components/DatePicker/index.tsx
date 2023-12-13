import React, { useEffect, useState } from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Calendar, CalendarProps } from 'react-native-calendars';
import { Common } from '../../assets/svg';
import { COLORS } from '../../theme/theme';
import { styles } from './styles';
import { MarkedDates } from 'react-native-calendars/src/types';
import { startOfDay } from 'date-fns';

export const formatDate = (value?: string | Date, targetFormat?: string) => {
  if (!value) {
    return '';
  }
};

export interface DatePickerComponentProps
  extends Omit<CalendarProps, 'onDayPress' | 'minDate' | 'maxDate'> {
  date?: string;
  maxDate?: Date;
  minDate?: Date;
  excludedDates?: string[];
  availableDate?: string[];
  onDateChange: (date: Date) => void;
  disabled: boolean;
  loading: boolean;
}

const DatePicker: React.FC<DatePickerComponentProps> = ({
  date,
  maxDate,
  minDate,
  excludedDates,
  availableDate,
  onDateChange,
  disabled = false,
  loading = false,
  ...CalendarProps
}) => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [markedDates, setMarkedDates] = useState<MarkedDates>();
  const [initialMarkedDates, setInitialMarkedDates] = useState<MarkedDates>();

  useEffect(() => {
    if (!date) {
      setSelectedDate(undefined);
      return;
    }
    const newDate = new Date(date);
    setSelectedDate(startOfDay(newDate));
    setMarkedDates({
      ...initialMarkedDates,
      [formatDate(date, 'yyyy-MM-dd') as string]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: COLORS.primaryBlack,
        selectedTextColor: COLORS.primaryOrangeHex,
      },
    });
  }, [date, initialMarkedDates]);

  useEffect(() => {
    const markedDatesObject = excludedDates
      ? excludedDates.reduce<MarkedDates>((acc, date) => {
          acc[formatDate(date, 'yyyy-MM-dd') as string] = {
            disabled: true,
            disableTouchEvent: true,
          };
          return acc;
        }, {})
      : {};
    setMarkedDates(markedDatesObject);
    setInitialMarkedDates(markedDatesObject);
  }, [excludedDates]);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setShowDatePicker(true)}
        style={[
          styles.datePreviewBase,
          disabled ? styles.datePreviewDisabled : null,
        ]}>
        <Text>{!selectedDate ? 'MMMM dd, yyyy' : 'Pick a date'}</Text>
        <Common.Calender stroke={COLORS.primaryBlack} />
      </TouchableOpacity>
      <Modal animationType="fade" transparent={false} visible={showDatePicker}>
        <TouchableOpacity
          onPressOut={() => setShowDatePicker(false)}
          activeOpacity={1}
          style={styles.modalScreen}>
          <TouchableWithoutFeedback>
            <View style={styles.datePickerContainer}>
              {!loading && (
                <Calendar
                  hideExtraDays={true}
                  minDate={minDate?.toString()}
                  maxDate={maxDate?.toString()}
                  onDayPress={day => {
                    const newDate = new Date(day?.dateString);
                    setSelectedDate(newDate);
                    onDateChange(newDate);
                    setShowDatePicker(false);
                  }}
                  initialDate={selectedDate?.toString()}
                  renderArrow={direction => (
                    <Common.ArrowRight
                      stroke={COLORS.primaryBlack}
                      style={
                        direction === 'left' ? styles.leftArrowStyle : undefined
                      }
                    />
                  )}
                  hideArrows={false}
                  markedDates={markedDates}
                  {...CalendarProps}
                  style={{ paddingHorizontal: 20 }}
                  theme={{
                    backgroundColor: 'red',
                    calendarBackground: 'red',
                    textSectionTitleColor: '#b6c1cd',
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: '#00adf5',
                    dayTextColor: '#2d4150',
                    textDisabledColor: '#d9',
                  }}
                />
              )}
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default DatePicker;
