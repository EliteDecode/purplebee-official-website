import TitleText from "@/components/common/TitleText";
import { teamMembers } from "@/utils/company.content";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box } from "@mui/material";

const Team = () => {
  return (
    <Box className="bg-tetiary py-16">
      <Box className="custom-c p-5 relative rounded-md">
        <TitleText title="Meet The Team" />

        <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Box
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              <Box className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                <h3 className="text-white text-xl font-semibold">
                  {member.name}
                </h3>
                <p className="text-gray-300 mb-4">{member.position}</p>
                <Box className="flex space-x-4">
                  <a
                    href={member.linkedin}
                    className="text-white hover:text-blue-400">
                    <LinkedInIcon />
                  </a>
                  <a
                    href={member.twitter}
                    className="text-white hover:text-blue-400">
                    <TwitterIcon />
                  </a>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
