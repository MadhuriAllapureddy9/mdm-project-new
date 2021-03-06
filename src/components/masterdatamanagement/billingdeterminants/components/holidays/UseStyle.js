import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({//makeStyles() used to create a custom hook
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1)
		}
	},
	button: {
		margin: theme.spacing(1)
	}
}));
export default useStyles;
