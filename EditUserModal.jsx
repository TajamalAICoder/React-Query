import { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { useQueryClient } from 'react-query'

export const EditUserModal = (props) => {
    const [modal, setModal] = useState(false)
    const queryClient = useQueryClient()
    const query = queryClient.getQueryData('users')
    const currentUser = query.find(q => q.id === props.id)

    const toggle = () => {
        setModal(!modal)
    }
    const handleSubmission = (e) => {
        e.preventDefault()
        const { age, email, user } = e.target.elements
        console.log(e.target.elements)
        const payload = {
            name: user.value,
            age: age.value,
            email: email.value
        }
    }
    return (
        <div>
            <Button color="danger" onClick={toggle}>{props.buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Update Modal</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmission}>
                        <FormGroup>
                            <Label for="userName">Name</Label>
                            <Input
                                type="text"
                                name="user"
                                id="userName"
                                defaultValue={currentUser.name}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="userEmail">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="userEmail"
                                defaultValue={currentUser.email}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="userAge">Age</Label>
                            <Input
                                type="number"
                                name="age"
                                id="userAge"
                                defaultValue={currentUser.age}
                            />

                        </FormGroup>
                        <FormGroup>
                            <ModalFooter>
                                <Button color="primary" type='submit'>Update</Button>{' '}
                                <Button color="secondary" onClick={toggle}>Cancel</Button>
                            </ModalFooter>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}

