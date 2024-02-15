import { ethers } from "hardhat";

async function main() {

  // Deploy contract
  const SaveEther = await ethers.deployContract("SaveEther");
 

  // Wait for deployment    
  await SaveEther.waitForDeployment();
  
  console.log(
    `SaveEther deployed to ${SaveEther.target}`
  );
}

// Execute deploy script
main() 
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
