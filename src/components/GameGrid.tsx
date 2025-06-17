import { useEffect, useState } from "react";
import apiClient from "@/services/api-client";
import {
  Card,
  Grid,
  Image,
  HStack,
  Combobox,
  Portal,
  useListCollection,
  useFilter,
  Spinner,
} from "@chakra-ui/react";

interface GameImage {
  icon_url: string;
  medium_url: string;
  screen_url: string;
  screen_large_url: string;
  small_url: string;
  super_url: string;
  thumb_url: string;
  tiny_url: string;
  original_url: string;
}

interface Game {
  guid: number;
  name: string;
  tags: JSON[];
  image: GameImage;
  deck: string;
}

interface gamegridYear {
  year: number;
}

const GameGrid = ({ year }: gamegridYear) => {
  const [platform, setPlatform] = useState("");
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const { contains } = useFilter({ sensitivity: "base" });
  const platforms = [
    { label: "All Platforms", value: "" },
    { label: "PlayStation 5", value: "Ps5" },
    { label: "Nintendo Switch 2", value: "NS2" },
    { label: "Xbox Series X", value: "Xbx" },
    { label: "Nintendo Switch 1", value: "NS1" },
    { label: "Xbox One", value: "Xbx1" },
    { label: "PlayStation 4", value: "Ps4" },
    { label: "Android", value: "And" },
    { label: "iPhone", value: "iP" },
  ];
  const sortFilters = [
    { label: "Date added", value: "date_added:desc" },
    { label: "Date last updated", value: "date_last_updated:desc" },
    { label: "Name (asc.)", value: "name:asc" },
    { label: "Name (desc.)", value: "name:desc" },
    {
      label: "Number of user reviews",
      value: "number_of_user_reviews:desc",
    },
    { label: "Game rating", value: "original_game_rating:desc" },
  ];
  const [loading, setLoading] = useState(false);
  const { collection, filter } = useListCollection({
    initialItems: platforms,
    filter: contains,
  });
  const collection2 = useListCollection({
    initialItems: sortFilters,
    filter: contains,
  }).collection;
  const filter2 = useListCollection({
    initialItems: sortFilters,
    filter: contains,
  }).filter;
  const [sort, setSort] = useState("");
  useEffect(() => {
    setLoading(true);
    if (platform === undefined) {
      setPlatform(" ");
    }
    let temp = platform;
    if (platform === " ") temp = "";
    apiClient
      .get("/games" + temp, {
        params: {
          sort: sort,
          filter: `expected_release_year:${year}`,
        },
      })
      .then((res) => {
        setGames(res.data.results);
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
        setLoading(false);
      });
  }, [platform, sort, year]);

  console.log(games);

  return (
    <>
      {error !== "Request failed with status code 404"
        ? error && <p style={{ color: "red" }}>{error}</p>
        : null}
      <HStack>
        <Combobox.Root
          padding={"15px"}
          collection={collection}
          onValueChange={(value) => setPlatform(value.value[0])}
          onInputValueChange={(e) => filter(e.inputValue)}
          width="320px">
          <Combobox.Label>Select platform:</Combobox.Label>
          <Combobox.Control>
            <Combobox.Input placeholder="Type to search" />
            <Combobox.IndicatorGroup>
              <Combobox.ClearTrigger />
              <Combobox.Trigger />
            </Combobox.IndicatorGroup>
          </Combobox.Control>
          <Portal>
            <Combobox.Positioner>
              <Combobox.Content>
                <Combobox.Empty>No items found</Combobox.Empty>
                {collection.items.map((item) => (
                  <Combobox.Item item={item} key={item.value}>
                    {item.label}
                    <Combobox.ItemIndicator />
                  </Combobox.Item>
                ))}
              </Combobox.Content>
            </Combobox.Positioner>
          </Portal>
        </Combobox.Root>
        <Combobox.Root
          padding={"15px"}
          collection={collection2}
          onValueChange={(value) => setSort(value.value[0])}
          onInputValueChange={(e) => filter2(e.inputValue)}
          width="320px">
          <Combobox.Label>Order by:</Combobox.Label>
          <Combobox.Control>
            <Combobox.Input placeholder="Type to search" />
            <Combobox.IndicatorGroup>
              <Combobox.ClearTrigger />
              <Combobox.Trigger />
            </Combobox.IndicatorGroup>
          </Combobox.Control>
          <Portal>
            <Combobox.Positioner>
              <Combobox.Content>
                <Combobox.Empty>No items found</Combobox.Empty>
                {collection2.items.map((item) => (
                  <Combobox.Item item={item} key={item.value}>
                    {item.label}
                    <Combobox.ItemIndicator />
                  </Combobox.Item>
                ))}
              </Combobox.Content>
            </Combobox.Positioner>
          </Portal>
        </Combobox.Root>
      </HStack>
      {loading && (
        <Spinner
          size={"xl"}
          padding={"80px"}
          marginLeft={"450px"}
          marginTop={"200px"}
        />
      )}
      {!loading && (
        <Grid templateColumns="repeat(auto-fill, 300px)" gap={10} p={6}>
          {games?.map((game) => (
            <>
              <Card.Root key={game.guid} maxH="xl" overflow="hidden">
                <Image
                  src={game.image.super_url}
                  style={{ width: 300, height: 300 }}
                />
                <Card.Header />
                <Card.Body gap="2">
                  <Card.Title mb="2">{game.name}</Card.Title>
                  <Card.Description textAlign={"center"}>
                    {game.deck}
                  </Card.Description>
                </Card.Body>
              </Card.Root>
            </>
          ))}
        </Grid>
      )}
    </>
  );
};

export default GameGrid;
