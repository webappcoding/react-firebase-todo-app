import React from "react";
import db, { timestamp } from "../firebase";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";

import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { useAuth } from "../hooks/AuthContext";

const TodoSchema = Yup.object().shape({
  todo: Yup.string().min(2, "Too Short!").required("Todo field is required"),
  description: Yup.string(),
});

const AddTodoForm = ({ popupClose }) => {
  const { currentUser } = useAuth();
  const handleFormSubmit = (values, actions) => {
    db.collection("todos").add({
      user: currentUser.uid,
      todo: values.todo,
      description: values.description,
      completed: false,
      timestamp: timestamp(),
    });
    actions.resetForm();
    popupClose();
  };

  const formFields = {
    todo: "",
    description: "",
  };

  return (
    <Formik
      initialValues={formFields}
      validationSchema={TodoSchema}
      onSubmit={handleFormSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            component={TextField}
            name="todo"
            autoFocus
            margin="normal"
            id="todo"
            label="Todo *"
            type="text"
            fullWidth
          />
          <Field
            component={TextField}
            name="description"
            type="text"
            label="Description"
            margin="normal"
            id="description"
            fullWidth
          />

          <Box pt={2} display="flex" justifyContent="flex-end">
            <Button type="button" color="primary" onClick={popupClose}>
              Cancel
            </Button>
            <Button disabled={isSubmitting} type="submit" color="primary">
              Submit
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default AddTodoForm;
