import classes from './Main.module.css'

const Main = props => {
  return (
    <main className={classes.Main}>
      {props.children}
    </main>
  )
}

export default Main