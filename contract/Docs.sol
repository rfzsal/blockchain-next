// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Docs {
    string public name = "Docs";
    uint256 public fileCount = 0;
    
    // this mapping behaves as a "catalog"
    // of files uploaded to the storage, we declare
    // it as public in order to access it directly from the Frontend
    mapping(uint256 => File) public files;

    struct File {
        uint256 fileId;
        string filePath;
        string fileName;
    }

    event FileUploaded(
        uint256 fileId,
        string filePath,
        string fileName
    );
    
    // we upload the file metadata
    // to the smart contract files
    // mapping in order to persist
    // the information.
    function uploadFile(
        string memory _filePath,
        string memory _fileName
    ) public {
        require(bytes(_filePath).length > 0);
        require(bytes(_fileName).length > 0);
        
        // since solidity mappings
        // do not have a lenght attribute
        // the simplest way to control the amount 
        // of files is using a counter
        fileCount++;

        files[fileCount] = File(
            fileCount,
            _filePath,
            _fileName
        );
        
        // From the frontend application
        // we can listen the events emitted from
        // the smart contract in order to update the UI.
        emit FileUploaded(
            fileCount,
            _filePath,
            _fileName
        );
    }
}