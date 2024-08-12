import { Box, Typography, Grid, Divider, Icon } from "@mui/material";
import { School, WorkspacePremium } from "@mui/icons-material";

const About = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        color: "#333",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Sobre
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={5}>
          <Box sx={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            textAling: 'center',
            backgroundColor: '#f9f9f9'
          }}>
            <Icon component={WorkspacePremium} sx={{ fontSize: 40, color: "#333"}} />
            <Typography variant="h6" sx={{ marginTop: 2}}>Experiência</Typography>
            <Typography variant="body1">1+ Anos de experiência como desenvolvedor front-end</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box sx={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9'
          }}></Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;

//         <Grid item xs={12} sm={5}>
//           <Box
//             sx={{
//               border: '1px solid #ddd',
//               borderRadius: '8px',
//               padding: '20px',
//               textAlign: 'center',
//               backgroundColor: '#f9f9f9',
//             }}
//           >
//             <Icon component={School} sx={{ fontSize: 40, color: '#64b5f6' }} />
//             <Typography variant="h6" sx={{ marginTop: 2 }}>
//               Educação
//             </Typography>
//             <Typography variant="body1">
//               Análise e Desenvolvimento de Sistemas
//             </Typography>
//           </Box>
//         </Grid>
//       </Grid>

//       <Divider sx={{ marginY: 4 }} />

//       <Typography variant="h4" gutterBottom>
//         Skills
//       </Typography>

//       <Grid container spacing={2} justifyContent="center">
//         {['JavaScript', 'ReactJS', 'HTML', 'CSS', 'GitHub', 'Tailwind', 'Material UI'].map((skill) => (
//           <Grid item xs={6} sm={3} md={2} key={skill}>
//             <Box
//               sx={{
//                 border: '1px solid #ddd',
//                 borderRadius: '8px',
//                 padding: '10px',
//                 textAlign: 'center',
//                 backgroundColor: '#f9f9f9',
//               }}
//             >
//               <Typography variant="body1">{skill}</Typography>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default AboutMe;
