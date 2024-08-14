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
                align="start"
                justify="center"
                px="lg"
                py="sm"
            >
                <Text fw="bold" fz="17px">{props.name}</Text>
            </Flex>
        </>
    );
}

export default CategoryIndicator;
