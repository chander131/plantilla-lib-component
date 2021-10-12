import React from 'react';

const Hello: React.FC<{ saludo?: string; color?: string }> = ({ saludo = '¡Hola mundo!', color = '' }) => {
	return <h1 style={{ color }}>{saludo}</h1>;
};

export default Hello;
