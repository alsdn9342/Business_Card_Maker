import React from 'react';
import styles from './card_edit_form.module.css'
import Card from '../card/card';
import ImageFileInput from '../image_file_input/image_file_input';
import Button from '../button/button';

const Card_edit_form = ({ card }) => {
    const {
      name,
      company,
      title,
      email,
      message,
      theme,
      fileName,
      fileURL,
    } = card;
    const onSubmit = () => {};
    return (
      <form className={styles.form}>
        <input className={styles.input} type="text" name="name" value={name} />
        <input
          className={styles.input}
          type="text"
          name="company"
          value={company}
        />
        <select className={styles.select} name="theme" value={theme}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="colorful">Colorful</option>
        </select>
        <input className={styles.input} type="text" name="title" value={title} />
        <input className={styles.input} type="text" name="email" value={email} />
        <textarea className={styles.textarea} name="message" value={message} />
        <div className={styles.fileInput}>
          <ImageFileInput />
        </div>
        <Button name="Delete" onClick={onSubmit} />
      </form>
    );
  };
export default Card_edit_form;