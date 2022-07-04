/**
 * @author Angel Labrada
 * @since v0.0.1
 * @date 28/2/22
 */
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#009ef7',
            // dark: will be calculated from palette.primary.main,
            contrastText: '#fff'
        },
        secondary: {
            // light: will be calculated from palette.primary.main,
            main: '#e4e6ef',
            // dark: will be calculated from palette.primary.main,
            contrastText: '#3f4254'
        },
        warning: {
            // light: will be calculated from palette.primary.main,
            main: '#ffc700',
            // dark: will be calculated from palette.primary.main,
            contrastText: '#fff'
        },
        success: {
            // light: will be calculated from palette.primary.main,
            main: '#50cd89',
            // dark: will be calculated from palette.primary.main,
            contrastText: '#fff',
        },
        error: {
            // light: will be calculated from palette.primary.main,
            main: '#d9214e',
            // dark: will be calculated from palette.primary.main,
            contrastText: '#fff'
        },
        info: {
            // light: will be calculated from palette.primary.main,
            main: '#7239ea',
            // dark: will be calculated from palette.primary.main,
            contrastText: '#fff'
        },
    },
    components: {
        // Name of the component
        MuiButtonBase: {
            defaultProps: {
                // The props to change the default for.
                // disableRipple: true, // No more ripple!
            },
            styleOverrides: {
                // Name of the slot
                root: {
                    border: '0px !important',
                    padding: 'calc(0.50rem + 1px) calc(1.5rem + 1px) !important',
                    boxShadow: 'none! important',
                    textDecoration: 'none !important',
                    textTransform: 'none !important',
                    borderRadius:' 0.375rem !important',
                },
            },
        },
        // Name of the component
        MuiInputBase: {
            defaultProps: {
                // The props to change the default for.
                disableRipple: true, // No more ripple!
            },
            styleOverrides: {
                // Name of the slot
                root: {
                    backgroundColor: '#f5f8fa !important',
                    border: 'none !important',
                    // borderColor: '#f5f8fa !important',
                    color: '#5e6278 !important',
                    transition: 'color .2s ease,background-color .2s ease'
                },
            },
        },
    },
});

export default lightTheme;
