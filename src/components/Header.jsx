import classes from './Header.module.css';

export default function Header() {
  return (
    <header>
        <div className="container">
            <div className={classes['main-wrap']}>
                <div className={classes["logo-wrap"]}>
                    Jobify
                </div>
                <div className={classes["links-wrap"]}>
                    <ul className={classes["links-flex"]}>
                        <li>Admin</li>
                        <li>Users</li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
  )
}
