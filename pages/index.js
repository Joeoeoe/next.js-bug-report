import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => {
  return createStyles({
    test: {
      color: 'red'
    }
  });
});

export default function Home() {
  const classes = useStyle();
  return (
    <div className={styles.container}>
      <h1 className={classes.test}>The style will be not useful until after HMR</h1>
    </div>
  )
}
