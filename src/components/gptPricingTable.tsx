import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Box,
    Text,
    Container,
} from "@chakra-ui/react";

const data = {
    headers: ["Model", "Pricing", "Value per $1 (Input/Range Start)", "Value per $1 (Output/Range End)"],
    rows: [
        ["GPT-3.5-turbo (after reduction)", "Input: $0.0005, Output: $0.0015 per 1K tokens", "2,000,000 tokens", "666,667 tokens"],
        ["GPT-4 (8k Context Length)", "Input: $0.03, Output: $0.06 per 1K tokens", "33,333 tokens", "16,667 tokens"],
        ["GPT-4 Turbo (Assumed reduction)", "Input: $0.01, Output: $0.03 per 1K tokens (Assumed 3X & 2X cheaper)", "100,000 tokens", "33,333 tokens"],
        ["DALL·E (Range based on quality/resolution)", "Range: $0.016 to $0.120 per image", "62 images ($0.016/image)", "8 images ($0.120/image)"]
    ]
};

const PricingTable = () => {
    return (
      <Container maxW="container.xl" className="border">
            <Box overflowX="auto">
                <Table variant="simple" className="border">
                    <Thead className="border">
                        <Tr className="border">
                            {data.headers.map((header, index) => (
                                <Th key={index}>{header}</Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody className="border">
                        {data.rows.map((row, rowIndex) => (
                            <Tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                    <Td key={cellIndex}>{cell}</Td>
                                ))}
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </Container>
    );
};

export default PricingTable;
