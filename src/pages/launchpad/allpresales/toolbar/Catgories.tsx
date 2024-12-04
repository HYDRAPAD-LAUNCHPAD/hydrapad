import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";
import { IconApps, IconHeartFilled } from "@tabler/icons-react";
import React from "react";

interface optionsType {
  icon: React.ReactNode;
  title: string;
  value: string;
}

const options: optionsType[] = [
  { icon: <IconApps className="mr-2 w-[18px]" />, title: "All Presales", value: "all_presales" },
  { icon: <IconApps className="mr-2 w-[18px]" />, title: "My Contributions", value: "my_contributions" },
  { icon: <IconHeartFilled className="mr-2 w-[18px]" />, title: "Favorites", value: "favorites" }
]

interface PropsType {
  tab: string,
  setTab: (value: string) => void
}

const Categories: React.FC<PropsType> = ({ tab, setTab }) => {

  const handleChange = (_: React.SyntheticEvent, value: string) => {
    setTab(value);
  }

  return (
    <Tabs value={tab} onChange={handleChange} className="w-[430px]">
      <TabsHeader
        className="rounded-none bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b border-white shadow-none rounded-none",
        }}
      >
        {
          options.map((item: optionsType) => (
            <Tab key={item.value} value={item.value} className="text-white py-3">
              <div className="flex items-center text-[13px]">{item.icon}{item.title}</div>
            </Tab>
          ))
        }
      </TabsHeader>
    </Tabs>
  )
}
export default Categories;