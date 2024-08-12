import { Image, Flex, Text } from "@mantine/core";

interface CategoryIndicatorProps {
    category: string | undefined;
    name: string | undefined;
}

function CategoryIndicator(props: CategoryIndicatorProps) {
    return (
        <>
            <Flex
                className={`round ${props.category}-indicator`}
                align="center"
                justify="center"
                px="md"
                py="xs"
            >
                <Text>{props.name}</Text>
            </Flex>
        </>
    );
}

export default CategoryIndicator;
