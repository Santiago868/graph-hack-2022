


/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import React, { useState, useRef } from "react";


import * as styles from './styles'

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;
export interface FileUploadProps {
  label: string
  maxFileSizeInBytes: number
  updateFilesCb: () => void
}
 
export const FileUpload = ({
    label,
    updateFilesCb,
    maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
    ...otherProps
  }: FileUploadProps) => {
    const fileInputField = useRef(null);
    const [files, setFiles] = useState({});
  
    return (
        <section>
          <label>{label}</label>
          <p>Drag and drop your files anywhere or</p>
          <button type="button">
            <i className="fas fa-file-upload" />
            <span> Upload {otherProps.multiple ? "files" : "a file"}</span>
          </button>
          <input
            type="file"
            ref={fileInputField}
            title=""
            value=""
            {...otherProps}
          />
        </section>      
    );
  }