import React from "react";
import styles from "./ProfileInfo.module.css";
import FormStateToRedux from "../../Common/FormControls/FormStateToRedux";
import {Field, Form} from "react-final-form";
import {Input} from "../../Common/FormControls/FormControls";
import {composeValidators, required} from "../../../utils/validators";

const ProfileDataForm = ({profile, onSubmit}) => {
    return <Form onSubmit={onSubmit}
          initialValues={profile}
          render={({submitError, handleSubmit, form, submitting, pristine}) => (
              <form onSubmit={handleSubmit}>
                  <FormStateToRedux form="profileData"/>
                  <div className={styles.profileData}>
                      <div>
                          <div>
                              <label className={styles.uppercaseParagraph}>Full name:</label>
                              <Field name={'fullName'}
                                     component={Input}
                                     placeholder={'Username'}
                                     validate={composeValidators(required)}/>
                          </div>
                          <div>
                              <label className={styles.uppercaseParagraph}>About me:</label>
                              <Field name={'aboutMe'}
                                     component={Input}
                                     placeholder={'About me'}/>
                          </div>
                          <div>
                              <label>Looking for a job:</label>
                              <Field name={'lookingForAJob'}
                                     component={'input'}
                                     type={'checkbox'}/>
                          </div>
                          <div>
                              <label className={styles.uppercaseParagraph}>Skills:</label>
                              <Field name={'lookingForAJobDescription'}
                                     component={Input}
                                     placeholder={'Skills'}/>
                          </div>
                      </div>
                      <div>
                          <p><u><b>Contacts:</b></u></p>
                          {Object.keys(profile.contacts)
                              .map(key => {
                                  return <div key={key}>
                                      <label className={styles.uppercaseParagraph}>{key}:</label>
                                      <Field name={'contacts.' + key}
                                             component={Input}
                                             placeholder={key}
                                             value={profile.contacts[key]}
                                      />
                                  </div>
                              })
                          }
                      </div>
                  </div>
                  <div>
                      <button>Save</button>
                      {submitError && <div className={styles.errorText}>{submitError}</div>}
                  </div>
              </form>
          )}/>
}

export default ProfileDataForm;