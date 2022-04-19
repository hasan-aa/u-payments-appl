import React from "react";
import {
    Checkbox,
    FormControl,
    Grid,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Paper,
    Select,
    SelectChangeEvent,
    Typography
} from "@mui/material";
import {useGetCategoriesQuery} from "../../apis/product-api";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
type CategoryFilterProps = {
    onChange: (categories: string[]) => any
}

export default function CategoryFilter(props: CategoryFilterProps) {
    const {onChange} = props;
    const {data: categories, isLoading} = useGetCategoriesQuery()
    const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof selectedCategories>) => {
        const {
            target: {value},
        } = event;

        // On autofill we get a stringified value.
        let result = typeof value === 'string' ? value.split(',') : value;

        setSelectedCategories(result);
        onChange(result)
    };

    return (
        <Grid item container width={1} justifyContent={'space-between'} mb={4}>
            <Grid item xs={12} sm={5} md={4}>
                {!!selectedCategories.length &&
                <Paper sx={{height: 1, width: 1,display:'flex',alignItems:'center',px:2}}>
                    <Typography noWrap variant={'body1'}>{selectedCategories.join(',')}</Typography>
                </Paper>
                }
            </Grid>

            <Grid item xs={12} sm={5} md={4}>
                <Paper>
                    <FormControl fullWidth>
                        <InputLabel id="categories-label">Categories</InputLabel>
                        <Select
                            labelId="categories-label"
                            id="categories-select"
                            multiple
                            value={selectedCategories}
                            onChange={handleChange}
                            input={<OutlinedInput label="Categories"/>}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {isLoading && 'Loading...'}
                            {categories?.map(category => (
                                <MenuItem key={category.id} value={category.name}>
                                    <Checkbox
                                        checked={selectedCategories.indexOf(category.name) > -1}/>
                                    <ListItemText primary={category.name}/>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Paper>
            </Grid>
        </Grid>
    )
}
