import React, { useEffect, useMemo } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

type PaginationProps = {
    totalPages: number;
    onPageChange: (page: number) => void;
};
export function Pagination({ totalPages, onPageChange }: PaginationProps) {
    const [currentPage, setCurrentPage] = React.useState(1);

    useEffect(() => {
        onPageChange(currentPage);
    }, [currentPage]);

    const getItemProps = (index: number) =>
        ({
            variant: currentPage === index ? "filled" : "text",
            color: "gray",
            onClick: () => setCurrentPage(index)
        }) as const;

    const next = () => {
        if (currentPage === 5) return;

        setCurrentPage(currentPage + 1);
    };

    const prev = () => {
        if (currentPage === 1) return;

        setCurrentPage(currentPage - 1);
    };

    const pageNumbers = useMemo(() => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    }, [totalPages]);
    const maxRenderedPageNumbers = 5;

    const sliceTable =
        currentPage === 1
            ? [1, maxRenderedPageNumbers - 1]
            : [1 - maxRenderedPageNumbers, totalPages - 1];

    return (
        <div className="flex items-center gap-4">
            <Button
                variant="text"
                className="flex items-center gap-2"
                onClick={prev}
                disabled={currentPage === 1}
            >
                <AiOutlineArrowLeft strokeWidth={2} className="h-4 w-4" /> Previous
            </Button>
            <div className="flex items-center gap-2">
                <IconButton {...getItemProps(1)}>1</IconButton>

                {currentPage !== 1 &&
                    currentPage !== totalPages &&
                    totalPages > maxRenderedPageNumbers && (
                        <>
                            ...
                            <IconButton {...getItemProps(currentPage - 1)}>
                                {currentPage - 1}
                            </IconButton>
                            <IconButton {...getItemProps(currentPage)}>{currentPage}</IconButton>
                            <IconButton {...getItemProps(currentPage + 1)}>
                                {currentPage + 1}
                            </IconButton>
                            ...
                        </>
                    )}

                {(currentPage === totalPages ||
                    currentPage === 1 ||
                    maxRenderedPageNumbers >= totalPages) && (
                    <>
                        {currentPage === totalPages && totalPages > maxRenderedPageNumbers && "..."}
                        {pageNumbers.slice(...sliceTable).map(number => {
                            return <IconButton {...getItemProps(number)}>{number}</IconButton>;
                        })}
                        {currentPage === 1 && totalPages > maxRenderedPageNumbers && "..."}
                    </>
                )}
                <IconButton {...getItemProps(totalPages)}>{totalPages}</IconButton>
            </div>
            <Button
                variant="text"
                className="flex items-center gap-2"
                onClick={next}
                disabled={currentPage === totalPages}
            >
                Next
                <AiOutlineArrowRight strokeWidth={2} className="h-4 w-4" />
            </Button>
        </div>
    );
}
