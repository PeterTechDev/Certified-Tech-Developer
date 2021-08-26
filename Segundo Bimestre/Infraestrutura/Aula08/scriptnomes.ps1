foreach($nome in $(Get-Content -Path .\listanomes.txt)) {
	Write-Output "O nome e $nome"
}
if ($nome -eq "Peter") {
    Write-Output "Encontrou $nome"
  } else {
     $nomes++
  }
