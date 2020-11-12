import React from 'react';
import TextField from '@material-ui/core/TextField';
import {
  StaticDateRangePicker,
  DateRangeDelimiter,
  DateRange,
} from '@material-ui/pickers';

const ResponsiveDateRangePicker = (): JSX.Element => {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

  return (
    <StaticDateRangePicker
      displayStaticWrapperAs="mobile"
      value={value}
      className="custom-datepicker"
      onChange={(newValue) => setValue(newValue)}
      renderInput={(startProps, endProps) => (
        <React.Fragment>
          <TextField {...startProps} />
          <DateRangeDelimiter> to </DateRangeDelimiter>
          <TextField {...endProps} />
        </React.Fragment>
      )}
    />
  );
};

export default ResponsiveDateRangePicker;
