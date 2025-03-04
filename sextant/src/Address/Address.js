import React, { useEffect, useState } from 'react'

const Address = ({ url }) => {

    const [ipAddress, setIpAddress] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setIpAddress(data.ip));
    }, [url]);

  return (
    <span>{ ipAddress }</span>
  )
}

export default Address
