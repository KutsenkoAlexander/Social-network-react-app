import React, {useEffect, useState} from 'react';
import styles from './ProfileInfo.module.css';

const ProfileStatus = React.memo((props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => { setStatus(props.status) }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={styles.status}>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>
                    {props.status || 'Status'}
                </span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true}
                       onBlur={deactivateEditMode}
                       value={status}
                       onChange={onStatusChange}
                />
            </div>
            }
        </div>
    )

})

export default ProfileStatus