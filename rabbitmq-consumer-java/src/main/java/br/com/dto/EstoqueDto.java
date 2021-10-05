package br.com.dto;

import java.io.Serializable;

public class EstoqueDto implements Serializable{
	
	public String codigoProduto;
	
	public int quantidade;

	public String getCodigoProduto() {
		return codigoProduto;
	}

	public void setCodigoProduto(String codigoProduto) {
		this.codigoProduto = codigoProduto;
	}

	public int getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}
	
	@Override
	public String toString() {
		return "EstoqueDto [codigoProduto=" + codigoProduto + ", quantidade=" + quantidade + "]";
	}
	
	
}
