import { Icon, InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { Search } from "@mui/icons-material";
export const Searchbar = (props: TextFieldProps) => (
  <TextField
    {...props}
    variant="outlined"
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <Search />
        </InputAdornment>
      ),
    }}
  />
);
