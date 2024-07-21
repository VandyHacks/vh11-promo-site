import {Box, Button, TextInput} from "@mantine/core";
import {useForm} from "@mantine/form";

interface RegistrationFormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export default function RegistrationForm() {
    const form = useForm<RegistrationFormValues>({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validate: {
            firstName: (value) => (value.length < 2 ? 'First name must have at least 2 letters' : null),
            lastName: (value) => (value.length < 2 ? 'Last name must have at least 2 letters' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    const handleSubmit = (values: RegistrationFormValues) => {
        console.log(values);
    };

    return (
        <Box maw={300} mx="auto">
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <TextInput
                    label="First Name"
                    placeholder="Enter your first name"
                    {...form.getInputProps('firstName')}
                />
                <TextInput
                    label="Last Name"
                    placeholder="Enter your last name"
                    mt="md"
                    {...form.getInputProps('lastName')}
                />
                <TextInput
                    label="Email"
                    placeholder="Enter your email"
                    mt="md"
                    {...form.getInputProps('email')}
                />
                <Button type="submit" mt="md">
                    Submit
                </Button>
            </form>
        </Box>
    );
}